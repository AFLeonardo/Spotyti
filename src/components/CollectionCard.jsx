import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export const CollectionCard = ({ 
  title, 
  subtitle, 
  artistImage, 
  backgroundColor = '#FFFFFF', 
  onPress 
}) => {
  return (
    <Pressable 
      style={[styles.card, { backgroundColor }]} 
      onPress={onPress}
    >
      {/* Contenido Izquierdo: Textos y Botón */}
      <View style={styles.contentLeft}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        
        {/* Separador sutil */}
        <View style={styles.divider} />

        {/* Botón con Flecha */}
        <View style={styles.arrowButton}>
          <Text style={styles.arrowText}>→</Text>
        </View>
      </View>

      {/* Contenido Derecho: Imagen del Artista */}
      <View style={styles.imageWrapper}>
        <Image 
          source={{ uri: artistImage }} 
          style={styles.artistImage} 
          resizeMode="cover"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 160,
    borderRadius: 20,
    marginRight: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
    padding: 18,
  },
  contentLeft: {
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 2, // Asegura que los textos queden por encima si la imagen se solapa
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    lineHeight: 22,
  },
  subtitle: {
    color: '#666666',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '80%',
    marginVertical: 10,
  },
  arrowButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  imageWrapper: {
    width: 120,
    height: '120%', // Permite que la imagen sobresalga verticalmente estilo la foto
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  artistImage: {
    width: '100%',
    height: '100%',
  },
});