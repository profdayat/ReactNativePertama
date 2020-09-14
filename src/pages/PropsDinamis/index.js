import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 15}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Family"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.279.721.721a/s150x150/61301465_357351395134442_4288082323648788388_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=HfC1hvovgyMAX-akUC4&oh=346a4c6cc537966267a853bf7f86aa52&oe=5F613848"
          />
          <Story
            judul="design"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.280.720.720a/s150x150/67403023_150204169387020_2737224452408288720_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=PBc9CDqamfwAX9OFZM8&oh=c1489c8c0763a3d6911db07917a0f13b&oe=5F60FCF0"
          />
          <Story
            judul="KKN"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.279.721.721a/s150x150/62053670_589566294864909_208605554627472949_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=hJ2m75D8aHIAX9YUitK&oh=0bbd30b2474fd8c3941f705e3f974c95&oe=5F60D8CA"
          />
          <Story
            judul="pemilu 2019"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.279.721.721a/s150x150/56242962_134854167637787_52988019375727586_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=p39XReaVn-EAX-XH00s&oh=b48e6287d043c2b65f997465f2cbcc9a&oe=5F60AFF7"
          />
          <Story
            judul="design"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.280.720.720a/s150x150/67403023_150204169387020_2737224452408288720_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=PBc9CDqamfwAX9OFZM8&oh=c1489c8c0763a3d6911db07917a0f13b&oe=5F60FCF0"
          />
          <Story
            judul="KKN"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.279.721.721a/s150x150/62053670_589566294864909_208605554627472949_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=hJ2m75D8aHIAX9YUitK&oh=0bbd30b2474fd8c3941f705e3f974c95&oe=5F60D8CA"
          />
          <Story
            judul="pemilu 2019"
            gambar="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.279.721.721a/s150x150/56242962_134854167637787_52988019375727586_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=p39XReaVn-EAX-XH00s&oh=b48e6287d043c2b65f997465f2cbcc9a&oe=5F60AFF7"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
