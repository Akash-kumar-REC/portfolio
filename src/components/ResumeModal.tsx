import React, { useState, useRef } from 'react';
import { X, Upload, FileText, Download, CheckCircle2, Eye } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentResumeUrl: string;
  onUploadResume: (newUrl: string, fileName: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  currentResumeUrl,
  onUploadResume
}) => {
  const [selectedFileName, setSelectedFileName] = useState<string>('Akash_Kumar_Resume.pdf');
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a valid PDF document (.pdf)');
        return;
      }
      const objectUrl = URL.createObjectURL(file);
      setSelectedFileName(file.name);
      onUploadResume(objectUrl, file.name);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-navy-700/80 shadow-2xl">
        
        {/* Modal Close Trigger */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-navy-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Resume Options
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              View, download, or upload a new PDF resume file
            </p>
          </div>
        </div>

        {/* Action Options */}
        <div className="space-y-4">
          
          {/* Option 1: View / Download Current Resume */}
          <div className="p-4 rounded-2xl bg-navy-850/80 dark:bg-navy-850/80 bg-slate-100 border border-navy-750 dark:border-navy-750 border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white truncate max-w-[180px] sm:max-w-[220px]">
                  {selectedFileName}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">PDF Document</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-semibold flex items-center gap-1.5 transition-all border border-cyan-500/20"
                title="View Resume in new tab"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View</span>
              </a>

              <a
                href={currentResumeUrl}
                download={selectedFileName}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-cyan-glow-sm"
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Option 2: Upload New Resume Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="p-6 rounded-2xl border-2 border-dashed border-navy-700 dark:border-navy-700 border-slate-300 hover:border-cyan-400/80 bg-navy-900/40 dark:bg-navy-900/40 bg-slate-50 text-center cursor-pointer transition-all group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
              Upload New PDF Resume
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click to select a .pdf file from your computer
            </p>
          </div>

          {uploadSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>Resume updated successfully!</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-navy-750 dark:border-navy-750 border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-200 text-slate-300 dark:text-slate-300 text-slate-800 text-sm font-semibold hover:bg-navy-750 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
