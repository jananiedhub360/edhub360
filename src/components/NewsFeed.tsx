import React, { useState, useEffect, useRef } from 'react';
import { Newspaper, Calendar, Clock, ExternalLink, TrendingUp, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedDate: string; // YYYY-MM-DD
  category: string;
  imageUrl: string;
  articleUrl: string;
}

const PLACEHOLDER_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'AI Revolution in Higher Education: Universities Adopt Smart Learning',
    summary: 'Top universities worldwide are integrating AI-powered learning platforms to personalize education and improve student outcomes through adaptive learning technologies.',
    source: 'Education Times',
    publishedDate: '2025-01-19',
    category: 'AI in Education',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    articleUrl: 'https://www.edsurge.com'
  },
  {
    id: '2',
    title: 'College Enrollment Drops 15% as Students Seek Alternative Paths',
    summary: 'Traditional college enrollments decline as skill-based education gains popularity among Gen Z students seeking practical career preparation.',
    source: 'Chronicle of Higher Ed',
    publishedDate: '2025-01-18',
    category: 'Trends',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    articleUrl: 'https://www.insidehighered.com'
  },
  {
    id: '3',
    title: 'Students Using AI Study Tools Score 30% Higher',
    summary: 'Research shows AI-powered learning tools significantly improve academic performance across multiple subjects and learning styles.',
    source: 'EdTech Review',
    publishedDate: '2025-01-17',
    category: 'Research',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    articleUrl: 'https://www.edsurge.com'
  },
  {
    id: '4',
    title: 'Remote Learning Skills Now Essential for Career Success',
    summary: 'Employers increasingly value self-directed learning abilities and digital collaboration skills developed through online education platforms.',
    source: 'Workforce Today',
    publishedDate: '2025-01-16',
    category: 'Career Skills',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    articleUrl: 'https://www.linkedin.com'
  },
  {
    id: '5',
    title: 'Micro-Credentials Gain Recognition from Fortune 500 Companies',
    summary: 'Major corporations now accept industry-specific micro-credentials as valid qualifications for technical roles and career advancement.',
    source: 'Business Education Weekly',
    publishedDate: '2025-01-15',
    category: 'Career Skills',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    articleUrl: 'https://www.forbes.com'
  },
  {
    id: '6',
    title: 'Virtual Reality Transforms Medical Education Training',
    summary: 'Medical schools adopt VR technology for immersive surgical training, reducing costs while improving student preparedness.',
    source: 'Medical Education Today',
    publishedDate: '2025-01-14',
    category: 'AI in Education',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    articleUrl: 'https://www.nature.com'
  }
];

const CATEGORIES = ['All', 'AI in Education', 'Trends', 'Research', 'Career Skills'];

const TRENDING_TOPICS = [
  'AI-Powered Learning',
  'Skill-Based Hiring',
  'Remote Education',
  'Micro-Credentials',
  'EdTech Innovation',
  'Career Transformation'
];

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Google Sheets fetch function
  const fetchNews = async () => {
    const SHEET_ID = 'YOUR_SHEET_ID'; // Replace with actual Sheet ID
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
    
    try {
      const res = await fetch(SHEET_URL);
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const data = json.table.rows.map((row: any, i: number) => ({
        id: `news-${i}`,
        title: row.c[0]?.v || '',
        summary: row.c[1]?.v || '',
        source: row.c[2]?.v || '',
        publishedDate: row.c[3]?.v || '',
        category: row.c[4]?.v || '',
        imageUrl: row.c[5]?.v || '',
        articleUrl: row.c[6]?.v || ''
      }));
      setNews(data);
      setLastUpdated(new Date().toISOString());
    } catch (error) {
      console.log('Using placeholder data due to fetch error:', error);
      setNews(PLACEHOLDER_NEWS);
      setLastUpdated(new Date().toISOString());
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize data
  useEffect(() => {
    fetchNews();
  }, []);

  // Filter news by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter(item => item.category === selectedCategory));
    }
    setCurrentSlide(0);
  }, [news, selectedCategory]);

  // Auto-carousel with smooth transitions
  useEffect(() => {
    if (!isPaused && filteredNews.length > 1) {
      intervalRef.current = setInterval(() => {
        handleNextSlide();
      }, 8000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [filteredNews, isPaused]);

  const handleNextSlide = () => {
    if (filteredNews.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % filteredNews.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrevSlide = () => {
    if (filteredNews.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => prev === 0 ? filteredNews.length - 1 : prev - 1);
      setIsTransitioning(false);
    }, 150);
  };

  const handleDotClick = (index: number) => {
    if (index === currentSlide || filteredNews.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatLastUpdated = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const currentNews = filteredNews[currentSlide];

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <Loader2 size={48} className="animate-spin text-[#009C9F]" />
            <span className="ml-4 text-xl text-gray-600">Loading latest education news...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <Newspaper size={32} className="text-[#009C9F] mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Stay Informed About Education</h2>
            </div>
            <div className="inline-flex items-center bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white px-4 py-2 rounded-full text-sm font-semibold">
              <TrendingUp size={16} className="mr-2" />
              Daily Education Insights
            </div>
          </div>
          
          {lastUpdated && (
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-2" />
              Last Updated: {formatLastUpdated(lastUpdated)}
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#009C9F] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Single News Card with Navigation */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          {filteredNews.length > 1 && (
            <>
              <button
                onClick={handlePrevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Previous news article"
              >
                <ChevronLeft size={24} className="text-[#009C9F]" />
              </button>
              
              <button
                onClick={handleNextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Next news article"
              >
                <ChevronRight size={24} className="text-[#009C9F]" />
              </button>
            </>
          )}

          {/* News Card */}
          <div
            className="transition-all duration-300 ease-in-out"
            style={{
              opacity: isTransitioning ? 0.7 : 1,
              transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {currentNews && (
              <article className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 bg-white max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-1/3 relative">
                    <img
                      src={currentNews.imageUrl}
                      alt={currentNews.title}
                      className="w-full h-64 lg:h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#009C9F] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {currentNews.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span>{formatDate(currentNews.publishedDate)}</span>
                        <span className="mx-2">•</span>
                        <span className="font-medium">{currentNews.source}</span>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 hover:text-[#009C9F] transition-colors">
                        {currentNews.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {currentNews.summary}
                      </p>
                    </div>

                    <div>
                      <a
                        href={currentNews.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white px-6 py-3 rounded-full font-semibold hover:from-[#00446E] hover:to-[#009C9F] transition-all duration-300 group"
                      >
                        Read Full Article
                        <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>

        {/* Dot Indicators */}
        {filteredNews.length > 1 && (
          <div className="flex items-center justify-center space-x-3 mb-12">
            {filteredNews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#009C9F] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to news article ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* News Counter */}
        {filteredNews.length > 1 && (
          <div className="text-center mb-8">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} of {filteredNews.length} articles
            </span>
          </div>
        )}

        {/* Load More Section - Show if there are more articles in other categories */}
        {selectedCategory !== 'All' && news.length > filteredNews.length && (
          <div className="text-center mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className="btn-primary"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Category Stats */}
        <div 
          className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#00446E] mb-2">
              {selectedCategory === 'All' ? 'All Education News' : selectedCategory}
            </h3>
            <p className="text-gray-600">
              {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''} available
            </p>
            {filteredNews.length > 1 && (
              <p className="text-sm text-gray-500 mt-1">
                Auto-rotating every 8 seconds • Hover to pause
              </p>
            )}
          </div>
        </div>

        {/* No Articles Message */}
        {filteredNews.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <Newspaper size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">
              No articles available for the selected category. Try selecting "All" to see all articles.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 btn-primary"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Single Article Message */}
        {filteredNews.length === 1 && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              <Newspaper size={16} className="mr-2" />
              Only one article available in this category
            </div>
          </div>
        )}

        {/* Trending Topics Banner */}
        <div className="bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <TrendingUp size={24} className="mr-3" />
            <h3 className="text-xl font-bold">Trending in Education</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {TRENDING_TOPICS.map((topic, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                #{topic.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;