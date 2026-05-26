import {visit} from 'unist-util-visit';

/**
 * Rehype plugin: wraps #RRGGBB hex codes with a visual color swatch.
 * Skips content inside <code> and <pre> elements.
 */
export default function rehypeColorSwatches() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || parent.tagName === 'code' || parent.tagName === 'pre') return;

      const hexPattern = /#([0-9A-Fa-f]{6})\b/g;
      if (!hexPattern.test(node.value)) return;
      hexPattern.lastIndex = 0;

      const newNodes = [];
      let last = 0;
      let match;

      while ((match = hexPattern.exec(node.value)) !== null) {
        if (match.index > last) {
          newNodes.push({type: 'text', value: node.value.slice(last, match.index)});
        }

        const hex = match[0];
        newNodes.push({
          type: 'element',
          tagName: 'span',
          properties: {className: ['color-swatch-wrapper']},
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: {className: ['color-swatch'], style: `background-color:${hex}`},
              children: [],
            },
            {type: 'text', value: hex},
          ],
        });

        last = match.index + hex.length;
      }

      if (last < node.value.length) {
        newNodes.push({type: 'text', value: node.value.slice(last)});
      }

      if (newNodes.length > 1 && parent && typeof index === 'number') {
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}
