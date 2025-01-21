import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Settings = (props) => {
  const MenuItem = ({ icon, title, subtitle, showDivider = false }) => (
    <>
      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name={icon} size={20} color="#E8EAED" style={styles.icon} />
        <Text style={styles.menuItemText}>{title}</Text>
      </TouchableOpacity>
      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
      {showDivider && <View style={styles.divider} />}
    </>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons onPress={props.closeModal} name="close" size={24} color="#fff" />
        <Text style={styles.headerText}>Google</Text>

      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 10, }}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View>
            <Text style={styles.email}>Nitish Gupta</Text>
            <Text style={{ color: 'lightgrey', }}>ni30.dev@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            type="antdesign"
            name="downcircleo"
            color={'#fff'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.manageAccountText}>Manage your Google Account</Text>


      {/* Menu Items */}
      <MenuItem icon="alarm" title="Turn on Incognito" showDivider={false} />
      <MenuItem icon="history" title="Search history" subtitle="Delete last 15 mins" />
      <MenuItem icon="security" title="SafeSearch" />
      <MenuItem icon="interests" title="Interests" />
      <MenuItem icon="vpn-key" title="Passwords" />
      <MenuItem icon="person" title="Your profile" />
      <MenuItem icon="tune" title="Search personalisation" showDivider={true} />
      <MenuItem icon="settings" title="Settings" />
      <MenuItem icon="help" title="Help and feedback" showDivider={true} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Privacy Policy</Text>
        <Text style={styles.footerDot}>•</Text>
        <Text style={styles.footerText}>Terms of Service</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2e30',
    borderRadius: 12,
    padding: 8,
    width: '95%',
    // maxWidth: 400,
    marginTop: '25%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  email: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 600
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 800,
    flex: 1,
    textAlign: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignItems: 'flex-end',
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8AB4F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  avatarText: {
    color: '#202124',
    fontSize: 20,
    fontWeight: 'bold',
  },
  manageAccountText: {
    alignSelf: 'center',
    width: '70%',
    color: '#E8EAED',
    fontSize: 14,
    borderColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 14,
    // backgroundColor: '#303134',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    marginRight: 16,
  },
  menuItemText: {
    color: '#E8EAED',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: 600
  },
  subtitle: {
    color: '#9AA0A6',
    fontSize: 14,
    paddingLeft: 52,
    marginTop: -8,
    marginBottom: 8,
  },
  divider: {
    height: 0.7,
    backgroundColor: '#9AA0A6',
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  footerText: {
    color: '#9AA0A6',
    fontSize: 14,
    marginBottom: 20
  },
  footerDot: {
    color: '#9AA0A6',
    paddingHorizontal: 8,
  },
});

export default Settings;