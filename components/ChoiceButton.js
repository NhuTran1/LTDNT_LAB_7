// components/ChoiceButton.js
import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export default function ChoiceButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 14,
    marginBottom: SPACING.sm + 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  pressed: {
    backgroundColor: COLORS.primaryDark,
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.5,
  },
  label: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.body,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});