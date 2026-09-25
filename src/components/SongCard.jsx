import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export const SongCard = ({ title, artist, coverUrl, tagColor = '#00F2FE', onPress }) => {
  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      {/* Portada del Álbum/Canción */}
      <Image 
        source={{ uri: coverUrl }} 
        style={styles.coverImage} 
        resizeMode="cover"
      />
      
      {/* Título con la barrita lateral de color */}
      <View style={styles.titleRow}>
        <View style={[styles.colorIndicator, { backgroundColor: tagColor }]} />
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Nombre del Artista */}
      <Text style={styles.artist} numberOfLines={1}>
        {artist}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 140,
    marginRight: 16,
  },
  coverImage: {
    width: 140,
    height: 140,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: '#2A2A2A', // Placeholder mientras carga la imagen
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  colorIndicator: {
    width: 3,
    height: 14,
    borderRadius: 2,
    marginRight: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  artist: {
    color: '#8E8E93',
    fontSize: 12,
    marginLeft: 9, // Alineado con el texto de arriba dejando la barra al lado
  },
});