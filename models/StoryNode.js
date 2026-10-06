// models/StoryNode.js

/**
 * Validate 1 node.
 * Shape: { id, text, choices: [{ text, nextId }] }
 */
export function validateStory(story) {
  if (!story || typeof story !== 'object') {
    throw new Error('Story phải là object');
  }

  const nodeIds = Object.keys(story);

  if (nodeIds.length === 0) {
    throw new Error('Story phải có ít nhất 1 node');
  }

  if (!story.start) {
    throw new Error('Story phải có node "start"');
  }

  nodeIds.forEach((nodeId) => {
    const node = story[nodeId];

    if (node.id !== nodeId) {
      throw new Error(`Node "${nodeId}": id phải khớp key`);
    }

    if (!node.text || typeof node.text !== 'string') {
      throw new Error(`Node "${nodeId}": text phải là chuỗi không rỗng`);
    }

    if (!Array.isArray(node.choices)) {
      throw new Error(`Node "${nodeId}": choices phải là mảng`);
    }

    if (node.choices.length > 2) {
      throw new Error(`Node "${nodeId}": tối đa 2 lựa chọn`);
    }

    node.choices.forEach((choice, i) => {
      if (!choice.text || typeof choice.text !== 'string') {
        throw new Error(`Node "${nodeId}" choice #${i + 1}: text không hợp lệ`);
      }
      if (!choice.nextId || !story[choice.nextId]) {
        throw new Error(
          `Node "${nodeId}" choice #${i + 1}: nextId "${choice.nextId}" không tồn tại`
        );
      }
    });
  });

  return true;
}