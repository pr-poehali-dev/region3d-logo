const NewLogo = () => {
  return (
    <svg viewBox="0 0 240 240" className="w-full h-full">
      <rect x="70" y="50" width="100" height="8" fill="#E5E7EB" rx="4"/>
      
      <line x1="85" y1="58" x2="85" y2="75" stroke="#E5E7EB" strokeWidth="3"/>
      <line x1="155" y1="58" x2="155" y2="75" stroke="#E5E7EB" strokeWidth="3"/>
      
      <rect x="105" y="72" width="30" height="55" fill="#FDB913" rx="3"/>
      <circle cx="120" cy="100" r="4" fill="#FFFFFF"/>
      
      <rect x="110" y="122" width="20" height="3" fill="#FFFFFF" opacity="0.4"/>
      
      <path d="M 85 127 L 95 145 L 145 145 L 155 127" fill="none" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      
      <rect x="90" y="140" width="60" height="6" fill="#E5E7EB" rx="2" opacity="0.6"/>
      
      <rect x="80" y="165" width="80" height="4" fill="#FDB913" opacity="0.3"/>
      <rect x="75" y="172" width="90" height="4" fill="#FDB913" opacity="0.5"/>
      <rect x="70" y="179" width="100" height="5" fill="#FDB913" opacity="0.7"/>
      <rect x="65" y="187" width="110" height="6" fill="#FDB913"/>
    </svg>
  );
};

export default NewLogo;