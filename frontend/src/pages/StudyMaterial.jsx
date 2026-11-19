import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';
import { 
  FileText, 
  Search, 
  Bookmark, 
  Download, 
  Eye, 
  Clock, 
  HardDrive, 
  Check, 
  Filter,
  Copy,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const StudyMaterial = () => {
  const { studyMaterials, toggleBookmark, addToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  
  // Active reading modal state
  const [activeMaterial, setActiveMaterial] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', 'Cheat Sheets', 'Architecture Notes', 'Language Notes', 'DevOps Reference', 'Security Guide'];

  const filteredMaterials = studyMaterials.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesBookmarked = !bookmarkedOnly || item.isBookmarked;
    return matchesSearch && matchesCat && matchesBookmarked;
  });

  const handleDownload = (item) => {
    addToast('Download Started', `Downloading "${item.title}" (${item.fileSize})...`, 'info');
  };

  const handleCopyContent = (text) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(true);
    addToast('Copied to Clipboard', 'Study notes & code snippets copied.', 'success');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-2">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated Developer Handouts</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Study Material & Reference</h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            High-density cheat sheets, system design architectures, interview blueprints, and downloadable PDFs.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search notes, topics, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Filter and Bookmark Toggle Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            Subject:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bookmarks Toggle */}
        <button
          onClick={() => setBookmarkedOnly(!bookmarkedOnly)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
            bookmarkedOnly
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
              : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${bookmarkedOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
          <span>Saved Bookmarks Only</span>
        </button>

      </div>

      {/* Material Cards Grid */}
      {filteredMaterials.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-dashed border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">No materials matched your query</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search terms or uncheck the "Saved Bookmarks Only" filter.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setBookmarkedOnly(false); }}
            className="px-4 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-slate-800/80 hover:border-slate-700 hover:shadow-xl transition-all p-5 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <Badge color="emerald">{item.format}</Badge>
                  
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title={item.isBookmarked ? 'Remove Bookmark' : 'Save Material'}
                  >
                    <Bookmark className={`w-4 h-4 ${item.isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => setActiveMaterial(item)}
                  className="font-bold text-white text-base mt-3 leading-snug group-hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Metadata */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.fileSize}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">{item.downloads} reads</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-2">
                <button
                  onClick={() => setActiveMaterial(item)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read In-App</span>
                </button>

                <button
                  onClick={() => handleDownload(item)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* In-App Material Reader Modal */}
      <Modal
        isOpen={!!activeMaterial}
        onClose={() => setActiveMaterial(null)}
        title={activeMaterial ? activeMaterial.title : 'Study Document'}
        maxWidth="max-w-3xl"
      >
        {activeMaterial && (
          <div className="space-y-6">
            {/* Meta bar inside modal */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Badge color="emerald">{activeMaterial.format}</Badge>
                <span className="text-xs text-slate-400">{activeMaterial.readTime}</span>
                <span className="text-xs text-slate-500">• {activeMaterial.fileSize}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyContent(activeMaterial.content)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={() => handleDownload(activeMaterial)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Document Content View */}
            <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 font-sans text-sm text-slate-200 leading-relaxed max-h-[55vh] overflow-y-auto space-y-4">
              <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                {activeMaterial.content}
              </pre>
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-slate-500">
                Tip: Bookmark this handout for offline exam preparation.
              </span>
              <button
                onClick={() => setActiveMaterial(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Close Reader
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default StudyMaterial;

