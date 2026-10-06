// components/EndingScreen.js
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export default function EndingScreen({ text, onRestart }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎬</Text>
        <Text style={styles.title}>KẾT THÚC</Text>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Pressable
        onPress={onRestart}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>CHƠI LẠI</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 64,
    marginBottom: SPACING.md,
  },
  title: {
    color: COLORS.gold,
    fontSize: FONT_SIZE.heading,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: SPACING.lg,
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.story,
    lineHeight: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  pressed: {
    backgroundColor: COLORS.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.body,
    fontWeight: '800',
    letterSpacing: 2,
  },
});