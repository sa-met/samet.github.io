<script lang="ts">
    import Prism from 'prismjs';
      interface codeProps {
          value: {
              code: string
          }
      }
  
      export let portableText: codeProps
  </script>
  
  <pre>
      <code>
          {@html Prism.highlight(portableText?.value?.code, Prism.languages['javascript'])}
      </code>
  </pre>
  
  <style>
      pre:has(code) {
        tab-size: 1;
        overflow-x: scroll;
      }
    
  </style>