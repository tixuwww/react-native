import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Clicker</Text>

        <Text style={styles.counter}>{count}</Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setCount((c) => c + 1)}
        >
          <Text style={styles.buttonText}>Tap!</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.resetButtonPressed,
          ]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220f2a',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fae8fa',
  },
  counter: {
    fontSize: 96,
    fontWeight: '800',
    color: '#928c97',
    fontVariant: ['tabular-nums'],
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 999,
    backgroundColor: '#928c97',
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#220f2a',
  },
  resetButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  resetButtonPressed: {
    opacity: 0.5,
  },
  resetText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a894b8',
  },
});