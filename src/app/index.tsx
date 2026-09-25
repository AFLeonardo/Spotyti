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
  'Hip Hop',
  'Rap',
  'R&B',
  'Pop',
  'Trap',
  'Rock',
  'Blues',
  'Party',
  'Sad',
];

const POPULAR_SONGS = [
  {
    "id": "1",
    "title": "Starboy",
    "artist": "The Weeknd",
    "coverUrl": "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
    "tagColor": "#00F2FE"
  },
  {
    "id": "2",
    "title": "After Hours",
    "artist": "The Weeknd",
    "coverUrl": "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
    "tagColor": "#FF003C"
  },
  {
    "id": "3",
    "title": "Dawn FM",
    "artist": "The Weeknd",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfl1omv1tpgkmDsodq6wmTM0-VHAiuYkGZ9BUap1VojgB5b8JBw2bJib0&s=10",
    "tagColor": "#FFD700"
  },
  {
    "id": "4",
    "title": "Beauty Behind the Madness",
    "artist": "The Weeknd",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-9Wp_e2S_yffbWM06PhX6Xo3Fgd6VFoLi1bjvW49Vw&s",
    "tagColor": "#8A2BE2"
  },
  {
    "id": "5",
    "title": "Trilogy",
    "artist": "The Weeknd",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMYBcmamPgaujyuntPtCS7mt2eEYziTMzTlPCJW07hQ&s=10",
    "tagColor": "#111111"
  },
  {
    "id": "6",
    "title": "The Marshall Mathers LP",
    "artist": "Eminem",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA4x71JxLWPSRTuErT37X2mO1yWLTW40_-woni2gbEQ&s=10",
    "tagColor": "#777777"
  },
  {
    "id": "7",
    "title": "The Eminem Show",
    "artist": "Eminem",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbXWZe5JF8RO900dgTSh0e1Icb1EoyEErCkAgsNa5Qw&s=10",
    "tagColor": "#F4D03F"
  },
  {
    "id": "8",
    "title": "The Slim Shady LP",
    "artist": "Eminem",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxcUJClFr1yqMIIys6FHgTzpg9BLqtl6VcgLiYQGMSQ&s=10",
    "tagColor": "#32CD32"
  },
  {
    "id": "9",
    "title": "Encore",
    "artist": "Eminem",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UkRRKXEaELbG2Q7V_W0sRwlfZucEJlM8GpH3jDCcQg&s=10",
    "tagColor": "#FF5E00"
  },
  {
    "id": "10",
    "title": "Recovery",
    "artist": "Eminem",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOT8vy6lg54Ir-MGwkepnv-TkndniuWVoXoOuRUCuww&s=10",
    "tagColor": "#3498DB"
  },
  {
    "id": "11",
    "title": "Graduation",
    "artist": "Kanye West",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViC0IXdsYesHjxHYeRb3vFKhMW7FQy_blnRCMNS3Vdw&s=10",
    "tagColor": "#7B68EE"
  },
  {
    "id": "12",
    "title": "My Beautiful Dark Twisted Fantasy",
    "artist": "Kanye West",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAG_HIQTWeviPm6uuxrz44V0uM04YmizbhbIK7Bb2HTg&s=10",
    "tagColor": "#FF1744"
  },
  {
    "id": "13",
    "title": "Yeezus",
    "artist": "Kanye West",
    "coverUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlv6cjF7OZSRjtBGmZQvB140vUqRBMl_FQI4k9gSMNQ&s=10",
    "tagColor": "#FFFFFF"
  }
]

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
    bgColor: '#D2F3FB',
  },
];

export default function Index() {

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView principal para hacer scroll vertical en toda la pantalla */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Hello, Leonardo ✨
          </Text>
          <Text style={styles.notification}>
            🔔
          </Text>
        </View>

        {/* CATEGORIAS */}
        <Text style={styles.sectionTitle}>
          Select Categories
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
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

        {/* POPULAR SONGS */}
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
                pathname: '/albumDetails' as any,
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