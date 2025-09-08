import { ContactLabel, UserWithInfo } from '@entities/user';
import {
  PhoneLabel,
  ProfileInfoEditorInputs,
  UserInfoItemLabel,
} from '../model/types';

/**
 * Generates and returns the default input values for a profile information editor.
 *
 * The function extracts relevant user information and maps it to predefined labels
 * for the profile editor. It ensures that each field is populated with a default
 * empty string ('') if the corresponding user data is unavailable.
 *
 * @param {UserWithInfo} user - The user object containing profile and contact information.
 * @returns {ProfileInfoEditorInputs} An object representing the default input values
 * for the profile information editor, with empty values as fallback where specific
 * user data is missing.
 */

export const getDefaultInputsValues = (
  user: UserWithInfo
): ProfileInfoEditorInputs => {
  return {
    [UserInfoItemLabel.Name]: user.name || '',
    [UserInfoItemLabel.Country]: user.country || '',
    [UserInfoItemLabel.Job]: user.job || '',
    [ContactLabel.Github]: user.contacts?.github || '',
    [ContactLabel.LinkedIn]: user.contacts?.linkedIn || '',
    [ContactLabel.Facebook]: user.contacts?.facebook || '',
    [ContactLabel.Instagram]: user.contacts?.instagram || '',
    [PhoneLabel.Phone]: user.phone || '',
  };
};
