import {
    Pressable,
    ScrollView,
    Text,
    View
} from 'react-native';

import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CollectionCard } from '../components/CollectionCard.jsx';
import { SongCard } from '../components/SongCard.jsx';
import { styles } from '../styles/index.js';

const categories = [
  'All',
  'Party',
  'Blues',
  'Sad',
  'Hip Hop',
];

const POPULAR_SONGS = [
  {
    id: '1',
    title: 'Starboy Remix',
    artist: 'The Weeknd',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500', 
    tagColor: '#00F2FE',
  },
  {
    id: '2',
    title: 'Superman',
    artist: 'Eminem',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500', 
    tagColor: '#FF5E00',
  },
  {
    id: '3',
    title: 'We Don\'t Care',
    artist: 'Kyanu & D...',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', 
    tagColor: '#00D2FF',
  },
];

const COLLECTIONS = [
  {
    id: '1',
    title: 'TOP SONGS\nGLOBAL',
    subtitle: 'Discover 85 songs',
    artistImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500', // Foto recortada/retrato
    bgColor: '#FFFFFF',
  },
  {
    id: '2',
    title: 'POP\nSOUNDS',
    subtitle: 'Discover 40 songs',
    artistImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    bgColor: '#D2F3FB', // Fondo celeste claro tipo la card lateral del mockup
  },
];

export default function Index() {

    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView principal para hacer scroll vertical en toda la pantalla */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* 1. Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Hello, Leonardo ✨
          </Text>
          <Text style={styles.notification}>
            🔔
          </Text>
        </View>

        {/* 2. Sección Categorías */}
        <Text style={styles.sectionTitle}>
          Select Categories
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category, index) => {
            const isSelected = index === 0; 

            return (
              <Pressable
                key={category}
                onPress={() => console.log('Seleccionado:', category)}
                style={({ pressed }) => [
                  styles.chip,
                  isSelected && styles.selectedChip,
                  pressed && { opacity: 0.7 },
                ]}
              >
                <Text
                  style={[
                    styles.chipText,
                    isSelected && styles.selectedChipText,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* 3. Sección Popular Songs */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Songs</Text>
          <Pressable onPress={() => console.log('See all')}>
            <Text style={styles.seeAllText}>See all {'>'}</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {POPULAR_SONGS.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              coverUrl={song.coverUrl}
              tagColor={song.tagColor}
              onPress={() => router.push({
                pathname: '/albumDetails',
                params: { 
                    title: song.title,
                    artist: song.artist,
                    coverUrl: song.coverUrl,
                    tagColor: song.tagColor, }
              })}
            />
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Collection</Text>
        </View>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            {COLLECTIONS.map((item) => (
            <CollectionCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                artistImage={item.artistImage}
                backgroundColor={item.bgColor}
                onPress={() => console.log('Colección seleccionada:', item.title)}
            />
            ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}