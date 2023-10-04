import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useFormContext} from '../formContext';

type FormShape = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

const camelCaseToWords = (str: string) => {
  return str
    .split(/(?=[A-Z])/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

const Input = (props: {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
}) => {
  return (
    <View>
      <Text style={styles.label}>{camelCaseToWords(props.label)}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
};
const keys = Object.keys(emptyForm);
keys.splice(0, 0, 'personalInformation');
keys.splice(3, 0, 'contactInformation');

const Form = () => {
  const {formData, setFormData} = useFormContext();

  const handleSubmit = () => {
    console.log('submitting', formData);

    //validation goes here
    // submit
  };
  return (
    <View style={styles.container}>
      {keys.map(key => {
        if (key === 'personalInformation' || key === 'contactInformation') {
          return (
            <Text key={key} style={styles.sectionHeader}>
              {camelCaseToWords(key)}
            </Text>
          );
        }
        return (
          <Input
            key={key}
            label={key}
            value={formData[key as keyof FormShape]}
            onChangeText={text => setFormData({...formData, [key]: text})}
          />
        );
      })}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.label}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '30%',
    marginHorizontal: '4%',
    gap: 10,
  },
  input: {
    height: 52,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  sectionHeader: {
    fontSize: 21,
    fontWeight: '600',
    paddingBottom: 10,
  },
  submitButton: {
    marginTop: 20,
    flexDirection: 'row',
    height: 52,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Form;
