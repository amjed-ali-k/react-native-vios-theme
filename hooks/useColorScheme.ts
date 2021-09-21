import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  // TODO: Add logic for returning User defined color scheme. If it doesn't exist return system color scheme.
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}