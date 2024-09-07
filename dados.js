const dadosTermos = [
    {
        termo: "Phishing",
        definicao: "Técnica de engenharia social que induz uma pessoa a fornecer informações confidenciais.",
        exemplos: ["E-mails falsos de bancos", "Mensagens SMS com links maliciosos"],
        link: "https://www.kaspersky.com.br/resource-center/threats/phishing"
    },
    {
        termo: "Malware",
        definicao: "Software malicioso projetado para infiltrar e danificar um sistema de computador.",
        exemplos: ["Vírus, worms, trojans, ransomware"],
        link: "https://www.kaspersky.com.br/resource-center/threats/malware"
    },
    {
        termo: "Firewall",
        definicao: "Sistema de segurança que monitora e controla o tráfego de rede, permitindo ou bloqueando conexões.",
        exemplos: ["Firewall de hardware", "Firewall de software"],
        link: "https://www.kaspersky.com.br/resource-center/threats/firewall"
    },
    {
        termo: "Ransomware",
        definicao: "Tipo de malware que criptografa os arquivos de um usuário e exige um resgate para a sua recuperação.",
        exemplos: "Locky, WannaCry",
        link: "https://www.kaspersky.com.br/resource-center/threats/ransomware"
    },
    {
        termo: "Engenharia social",
        definicao: "Técnica utilizada por atacantes para manipular pessoas e obter informações confidenciais.",
        exemplos: "Phishing, pretexting",
        link: "https://www.kaspersky.com.br/resource-center/threats/social-engineering"
    },
    // ... adicionar mais termos aqui
    {
        termo: "Vulnerabilidade",
        definicao: "Fraqueza ou defeito em um sistema que pode ser explorado por atacantes.",
        exemplos: "Falha de configuração, bug de software",
        link: "https://www.kaspersky.com.br/resource-center/threats/vulnerability"
    },
    {
        termo: "Exploit",
        definicao: "Código malicioso que tira proveito de uma vulnerabilidade.",
        exemplos: "Exploit para buffer overflow",
        link: "https://www.kaspersky.com.br/resource-center/threats/exploit"
    },
    {
        termo: "Patch",
        definicao: "Correção de software para corrigir vulnerabilidades.",
        exemplos: "Patch de segurança do Windows",
        link: "https://www.kaspersky.com.br/resource-center/threats/patch"
    },
    {
        termo: "Intrusão",
        definicao: "Acesso não autorizado a um sistema de computador.",
        exemplos: "Hacking, cracking",
        link: "https://www.kaspersky.com.br/resource-center/threats/intrusion"
    },
    {
        termo: "Botnet",
        definicao: "Rede de computadores infectados por malware, controlados por um atacante.",
        exemplos: "Botnet utilizada para ataques DDoS",
        link: "https://www.kaspersky.com.br/resource-center/threats/botnet"
    },
    {
        termo: "DDoS",
        definicao: "Ataque que sobrecarrega um servidor ou rede, tornando-o indisponível.",
        exemplos: "Ataque DDoS contra um site popular",
        link: "https://www.kaspersky.com.br/resource-center/threats/ddos"
    },
    {
        termo: "SQL Injection",
        definicao: "Técnica de ataque que injeta código malicioso em comandos SQL.",
        exemplos: "Ataque para roubar dados de um banco de dados",
        link: "https://www.kaspersky.com.br/resource-center/threats/sql-injection"
    },
    {
        termo: "XSS (Cross-site Scripting)",
        definicao: "Ataque que injeta scripts maliciosos em páginas web vulneráveis.",
        exemplos: "Ataque para roubar cookies de sessão",
        link: "https://www.kaspersky.com.br/resource-center/threats/xss"
    },
    {
        termo: "CSRF (Cross-Site Request Forgery)",
        definicao: "Ataque que força um usuário autenticado a executar ações indesejadas em um aplicativo web.",
        exemplos: "Transferência bancária não autorizada",
        link: "https://www.kaspersky.com.br/resource-center/threats/csrf"
    },
    {
        termo: "Zero-day",
        definicao: "Vulnerabilidade desconhecida e não corrigida.",
        exemplos: "Exploit de zero-day utilizado em um ataque",
        link: "https://www.kaspersky.com.br/resource-center/threats/zero-day"
    },
    {
        termo: "Autenticação",
        definicao: "Processo de verificação da identidade de um usuário.",
        exemplos: "Login com senha, autenticação biométrica",
        link: "https://www.kaspersky.com.br/resource-center/threats/authentication"
    },
    {
        termo: "Autorização",
        definicao: "Processo de concessão de permissões a um usuário autenticado.",
        exemplos: "Permissões de acesso a arquivos e sistemas",
        link: "https://www.kaspersky.com.br/resource-center/threats/authorization"
    },
    {
        termo: "Cifragem",
        definicao: "Processo de codificação de dados para protegê-los de acesso não autorizado.",
        exemplos: "AES, RSA",
        link: "https://www.kaspersky.com.br/resource-center/threats/encryption"
    },
    {
        termo: "Penetration testing",
        definicao: "Simulação de um ataque cibernético para identificar vulnerabilidades.",
        exemplos: "Pentest de rede, pentest de aplicação",
        link: "https://www.kaspersky.com.br/resource-center/threats/penetration-testing"
    },
    {
        termo: "Hacker",
        definicao: "Indivíduo que explora e manipula sistemas de computador, redes e dados. Pode ter intenções benignas (white hat) ou maliciosas (black hat).",
        exemplos: ["Hacker ético testando a segurança de um sistema", "Hacker malicioso roubando dados de uma empresa"],
        categoria: "Pessoas e Papéis",
        link: "https://pt.wikipedia.org/wiki/Hacker"
      },
];