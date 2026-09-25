import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingEnd: 30
  },

  greeting: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },

  notification: {
    fontSize: 22,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 35,
    marginBottom: 15,
  },

  categoryContainer: {
    paddingRight: 20,
    height: 35,
    marginStart: 20
  },

  chip: {
    backgroundColor: '#242424',
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 25,
    marginRight: 10,
  },

  selectedChip: {
    backgroundColor: '#B7FF32',
  },

  chipText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  selectedChipText: {
    color: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', // Fondo oscuro como el mockup
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    margin: 5
  },
  seeAllText: {
    color: '#8E8E93',
    fontSize: 13,
  },
  scrollContainer: {
    paddingLeft: 20,
    paddingRight: 4, // Para equilibrar con el marginRight de la última card
  },
});