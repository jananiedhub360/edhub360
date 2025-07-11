import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#00446E]">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-500 mb-6">Last updated: 8th July 2025</p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              At EdHub360, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website.
            </p>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">Information We Collect:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Personal details (e.g., name, email, phone) submitted via contact forms or registration.</li>
              <li>Usage data such as browser/device info and page visits (via cookies/analytics).</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">How We Use It:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>To deliver and improve our services.</li>
              <li>To respond to queries and provide support.</li>
              <li>To send updates or promotional content (with your consent).</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">Data Sharing:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>We don't sell your personal data.</li>
              <li>We may share data with service providers under confidentiality agreements.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">Cookies:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Used for improving experience and analytics.</li>
              <li>You can disable cookies via browser settings.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">Your Rights:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Request access, correction, or deletion of your data.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">Security:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>We implement standard protections for your data.</li>
              <li>No transmission method online is 100% secure.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#00446E] mb-4">Contact:</h3>
            <p className="text-gray-700 leading-relaxed">
              Email us at{' '}
              <a 
                href="mailto:contact@edhub360.com" 
                className="text-[#009C9F] hover:underline"
              >
                contact@edhub360.com
              </a>{' '}
              for questions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#00446E] hover:to-[#009C9F] transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;