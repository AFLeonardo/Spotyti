import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AlbumDetails() {
  const router = useRouter();
  const { title, artist, coverUrl, tagColor } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>‹ Volver</Text>
      </Pressable>

      <View style={styles.content}>
        {coverUrl ? (
          <Image
            source={{ uri: coverUrl }}
            style={styles.coverImage}
            resizeMode="cover"
            />
        ) : null}

        <View style={styles.infoContainer}>
          <View style={[styles.tag, { backgroundColor: tagColor || '#00F2FE' }]} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0D0D', paddingHorizontal: 20 },
  backButton: { paddingVertical: 10, marginBottom: 10 },
  backText: { color: '#00F2FE', fontSize: 18, fontWeight: '600' },
  content: { alignItems: 'center', marginTop: 20 },
  coverImage: { width: 260, height: 260, borderRadius: 20, marginBottom: 24 },
  infoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  tag: { width: 4, height: 20, borderRadius: 2, marginRight: 8 },
  title: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  artist: { color: '#8E8E93', fontSize: 16 },
});