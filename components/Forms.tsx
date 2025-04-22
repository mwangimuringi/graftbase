useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-100">
