// components/StoryCard.js
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export default function StoryCard({ text }) {
  return (
    <View style={styles.card}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>{text}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  scrollContent: {
    padding: SPACING.lg,
    justifyContent: 'center',
    flexGrow: 1,
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.story,
    lineHeight: 28,
    textAlign: 'left',
  },
});