import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;


  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent disabled name="name" label="Name" />
          <TextFieldComponent disabled name="status" label="Status" />
          <TextFieldComponent  disabled name="species" label="Species" />
          <TextFieldComponent disabled name="gender" label="Gender" />
          <TextFieldComponent disabled name="type" label="Types" />
          <TextFieldComponent disabled name="origin.name" label="Original Episode"/>
          <TextFieldComponent name="bestSentences"  label="BestSentences"/>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
