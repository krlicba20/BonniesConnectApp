import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// List of academic clubs
const academicClubs = [
  'American Advertising Federation',
  'American Marketing Association',
  'American Society for Biochemistry & Molecular Biology',
  'Bonaventure Accounting Association',
  'Bonaventure Education Association',
  'C4 Business Consulting Club',
  'Criminology Club',
  'Economics Club',
  'Enactus (Partnering with Business to Make a Difference)',
  'History Club',
  'Management Club',
  'Math Club',
  'Mock Trial',
  'Model United Nations',
  'National Student Nurses Association',
  'Nvestnus',
  'Orion Astronomy Club',
  'Philosophy Club',
  'Physical Activities Club',
  'Pre-PA Club',
  'Psych Associates (Psychology Club & Psi Chi)',
  'Public Health Club',
  'Sport Management Club',
  'Students in Money Management (Portfolio Management)'
];

// List of arts clubs
const artsClubs = [
  '3D Printing Club',
  'Art Club',
  'Chattertons Poetry Club',
  'Dance Team',
  'The Laugh Pack Comedy Club',
  'Vocal & Instrumental Music Ensembles'
];

// List of athletics and recreation clubs
const athleticsClubs = [
  'Cheerleading',
  'Club Sports',
  'Gaming Club (Recreational Gaming)',
  'Intramural Sports',
  'SBU Power Yoga',
  'Student Athletes Wellness Club',
  'Team Bonas (Sports Marketing)'
];

// List of honor societies
const honorSocieties = [
  'Alpha Psi Omega (Theater)',
  'Kappa Delta Pi (Education)',
  'Phi Alpha Theta (History)',
  'Pi Delta Phi (French)',
  'Pi Mu Epsilon (Mathematics)',
  'Psi Chi (Psychology)',
  'Sigma Delta Pi (Hispanic)'
];

// List of leadership clubs
const leadershipClubs = [
  'Campus Activities Board',
  'Freshman Leadership Program',
  'Gold Bar Club (ROTC)',
  'Student-Athlete Advisory Committee',
  'Student Government Association',
  'Student Veterans of America'
];

// List of media and publications clubs
const mediaClubs = [
  'Bona Venture (Student Newspaper)',
  'Her Campus',
  'The Laurel Literary Magazine',
  'SBU-TV',
  'WSBU 88.3 FM, The Buzz'
];

// List of multicultural clubs
const multiculturalClubs = [
  'Anime Club',
  'Asia (Asian Students in Action)',
  'Black Student Union',
  'Latin American Student Organization',
  'Muslim Student Association',
  'SBU for Equality',
  'Spectrum (LGBTQIA+ Students)',
  'Step Team'
];

// List of service and advocacy clubs
const serviceClubs = [
  'Active Minds',
  'Bona Buddies (Youth Mentoring)',
  'BonaResponds (Relief Organization)',
  'Bona Scouts',
  'Break the Bubble',
  'College Democrats',
  'College Republicans',
  'Empower',
  'SBU@SPCA',
  'Silver Wolves',
  'Student-Run Medical Emergency Response Team',
  'Warming House'
];

// List of spiritual life clubs
const spiritualLifeClubs = [
  'Mountain Community Leaders',
  'Search Retreat Team',
  'Vocation Group'
];

const Clubs = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}
        behavior="padding">
        <ScrollView>
        {/* Academic Clubs */}
        <Text style={styles.sectionHeaders}>
            Academic Clubs
        </Text>
        {academicClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Arts Clubs */}
        <Text style={styles.sectionHeaders}>
            Arts Clubs
        </Text>
        {artsClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Athletics and Recreation Clubs */}
        <Text style={styles.sectionHeaders}>
            Athletics and Recreation Clubs
        </Text>
        {athleticsClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Honor Societies */}
        <Text style={styles.sectionHeaders}>
            Honor Societies
        </Text>
        {honorSocieties.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Leadership Clubs */}
        <Text style={styles.sectionHeaders}>
            Leadership Clubs
        </Text>
        {leadershipClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Media and Publications Clubs */}
        <Text style={styles.sectionHeaders}>
            Media and Publications Clubs
        </Text>
        {mediaClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Multicultural Clubs */}
        <Text style={styles.sectionHeaders}>
            Multicultural Clubs
        </Text>
        {multiculturalClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Service and Advocacy Clubs */}
        <Text style={styles.sectionHeaders}>
            Service and Advocacy Clubs
        </Text>
        {serviceClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}

        {/* Spiritual Life Clubs */}
        <Text style={styles.sectionHeaders}>
            Spiritual Life Clubs
        </Text>
        {spiritualLifeClubs.map((club, index) => (
          <Text key={index} style={styles.clubName}>{club}</Text>
        ))}
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    clubName: {
        color: '#8B4513',
        fontSize: 16,
        marginTop: 10,
    },
    sectionHeaders: {
        color: '#8B4513',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
});

export default Clubs;
