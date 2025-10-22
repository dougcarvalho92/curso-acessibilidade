# Extensões e Ferramentas para Acessibilidade

### AXE Core
Uma biblioteca de testes automatizados para acessibilidade web, especialmente integrada com React.
- Detecta problemas de acessibilidade durante o desenvolvimento
- Fornece sugestões de correção
- Link: https://www.npmjs.com/package/@axe-core/react

### ESLint-plugin-jsx-a11y
Plugin ESLint para identificar e corrigir problemas de acessibilidade em código JSX.
- Verifica padrões de acessibilidade no código
- Integra com o workflow de desenvolvimento
- Link: https://www.npmjs.com/package/eslint-plugin-jsx-a11y

### Landmark Navigation
Extensão Chrome para visualização e navegação de landmarks ARIA.
- Ajuda a identificar regiões importantes da página
- Permite navegação rápida via atalhos de teclado
- Útil para testar a estrutura de landmarks da página
- Link: https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp


### Uso de headings (h1, h2, h3...)
Use headings para expressar a hierarquia lógica do conteúdo: comece com h1 para o título principal, em seguida h2 para seções, h3 para subseções, e assim por diante. Não pule níveis (por exemplo h2 → h4) porque isso dificulta a navegação por leitores de tela e pode ser sinalizado por ferramentas como axe e eslint-plugin-jsx-a11y. Use CSS para estilo, não para ajustar semântica.

### Uso de Contraste
O contraste adequado é fundamental para a acessibilidade visual na web:
- Use uma razão mínima de contraste de 4.5:1 para texto normal
- Para texto grande (18pt ou 14pt bold), use razão mínima de 3:1
- Ferramentas como WAVE e Axe podem verificar o contraste
- Evite combinações problemáticas como azul/verde ou vermelho/verde
- Teste seu site em modo escuro e claro
- Considere usuários com daltonismo ao escolher cores

Dicas práticas:
- Texto escuro em fundo claro (ou vice-versa)
- Evite texto sobre imagens sem overlay
- Forneça modo alto contraste
- Verifique o contraste de todos elementos interativos

Links úteis:
- WCAG Guidelines sobre contraste: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html

### Leitores de Tela Populares

#### NVDA (NonVisual Desktop Access)
- Leitor de tela gratuito e open source
- Popular no Windows
- Suporta múltiplos idiomas
- Link: https://www.nvaccess.org/

#### JAWS (Job Access With Speech)
- Leitor de tela profissional
- Amplamente usado em ambientes corporativos
- Forte suporte a Braille
- Link: https://www.freedomscientific.com/products/software/jaws/

#### VoiceOver
- Leitor nativo do macOS e iOS
- Bem integrado ao ecossistema Apple
- Gratuito e já instalado
- Link: https://support.apple.com/guide/voiceover/welcome/mac

### Sobre modal
- Usar o dialog do html
- Caso exista um modal feito a mão, usar a 
- role="dialog"
- aria-labelledby
- aria-describedby
- tabindex = -1

### RADIX UI É ACESSIVEL 