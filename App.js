// App.js
import { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { STORY } from './data/story';
import { COLORS, SPACING } from './constants/theme';
import StoryCard from './components/StoryCard';
import ChoiceButton from './components/ChoiceButton';
import EndingScreen from './components/EndingScreen';

const START_NODE_ID = 'start';

export default function App() {
  // ============ STATE — chỉ 1 ============
  const [currentNodeId, setCurrentNodeId] = useState(START_NODE_ID);

  // ============ DERIVED ============
  const currentNode = STORY[currentNodeId];
  const isEnding = currentNode.choices.length === 0;

  // ============ EVENT HANDLERS ============
  const handleChoice = (nextId) => {
    setCurrentNodeId(nextId);
  };

  const handleRestart = () => {
    setCurrentNodeId(START_NODE_ID);
  };

  // ============ RENDER ============
  // Màn hình kết thúc
  if (isEnding) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <EndingScreen text={currentNode.text} onRestart={handleRestart} />
      </View>
    );
  }

  // Màn hình chơi
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        <StoryCard text={currentNode.text} />

        <View style={styles.choices}>
          {currentNode.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              label={choice.text}
              onPress={() => handleChoice(choice.nextId)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
  },
  content: {
    flex: 1,
  },
  choices: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
});