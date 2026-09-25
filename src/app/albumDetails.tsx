import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function AlbumDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    title?: string;
    artist?: string;
    coverUrl?: string;
    tagColor?: string;
  }>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Valores recibidos por parámetro o valores por defecto
  const title = params.title || 'Starboy Remix';
  const artist = params.artist || 'The Weeknd';
  const coverUrl = params.coverUrl || 'https://via.placeholder.com/300';

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <Ionicons name="chevron-down" size={24} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerSubtext}>PLAYING FROM ALBUM</Text>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Portada del Álbum */}
      <View style={styles.coverContainer}>
        <Image source={{ uri: coverUrl }} style={styles.coverImage} resizeMode="cover" />
      </View>

      {/* Info de la Canción y Corazón */}
      <View style={styles.songDetailsContainer}>
        <View style={styles.titleArtistContainer}>
          <Text style={styles.songTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artistName} numberOfLines={1}>
            {artist}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={26}
            color={isLiked ? "#1DB954" : "#FFF"}
          />
        </TouchableOpacity>
      </View>

      {/* Barra de Progreso */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarActive} />
          <View style={styles.progressKnob} />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>1:37</Text>
          <Text style={styles.timeText}>4:21</Text>
        </View>
      </View>

      {/* Controles del Reproductor */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={24} color="#B3B3B3" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={28} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playButton}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={28}
            color="#000"
            style={{ marginLeft: isPlaying ? 0 : 3 }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={28} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="repeat" size={24} color="#B3B3B3" />
        </TouchableOpacity>
      </View>

      {/* Sección Inferior de Letras (Lyrics) */}
      <View style={styles.lyricsFooter}>
        <Text style={styles.lyricsText}>LYRICS</Text>
        <Ionicons name="chevron-down" size={16} color="#B3B3B3" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    backgroundColor: '#282828',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  headerSubtext: {
    color: '#B3B3B3',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  coverContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  coverImage: {
    width: width - 48,
    height: width - 48,
    borderRadius: 12,
  },
  songDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleArtistContainer: {
    flex: 1,
    marginRight: 15,
  },
  songTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 4,
  },
  progressContainer: {
    marginVertical: 15,
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: '#404040',
    borderRadius: 2,
    position: 'relative',
    justifyContent: 'center',
  },
  progressBarActive: {
    height: '100%',
    width: '38%',
    backgroundColor: '#A0E515', // Tono verde neón de la imagen
    borderRadius: 2,
  },
  progressKnob: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#A0E515',
    position: 'absolute',
    left: '37%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timeText: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: '#A0E515', // Tono verde neón
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsFooter: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  lyricsText: {
    color: '#B3B3B3',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 2,
  },
});