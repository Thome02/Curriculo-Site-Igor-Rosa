
import { useEffect, useRef } from 'react';

const CodeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Code snippets to display in the background
    const codeSnippets = [
      "function hackTheSystem() { return 'access granted'; }",
      "const secure = false; // TODO: fix vulnerability",
      "for(let i=0; i<data.length; i++) { decrypt(data[i]); }",
      "if(port === 443) { console.log('SSL enabled'); }",
      "class Exploit { constructor() { this.payload = 'harmless'; } }",
      "async function bruteForce(target) { /* ... */ }",
      "const encryptedData = Buffer.from(raw).toString('base64');",
      "process.env.NODE_ENV === 'development' ? true : false;",
      "const firewall = new Firewall({ enabled: false });",
      "fetch('https://api.example.com/vulnerabilities')",
      "nmap -sV -p 1-65535 192.168.1.1",
      "sudo apt-get install metasploit-framework",
      "ssh -p 22 admin@server.com",
      "SELECT * FROM users WHERE id = 1 OR 1=1;",
      "python3 -c 'import socket; s=socket.socket()'",
      "echo 'Hello World' > /dev/null",
      "sudo tcpdump -i eth0 port 80",
      "cd /var/www && grep -r 'password' .",
      "openssl s_client -connect example.com:443",
      "curl -X POST -d 'data=test' https://api.com",
    ];
    
    // Create code lines
    const createCodeLines = () => {
      for (let i = 0; i < 50; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random position and speed
        const xPos = Math.random() * width;
        const duration = 15 + Math.random() * 45; // seconds
        const delay = Math.random() * 5;
        
        line.style.left = `${xPos}px`;
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${delay}s`;
        
        container.appendChild(line);
      }
    };
    
    createCodeLines();
    
    // Clean up code lines on unmount
    return () => {
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);
  
  return <div ref={containerRef} className="code-background"></div>;
};

export default CodeBackground;
