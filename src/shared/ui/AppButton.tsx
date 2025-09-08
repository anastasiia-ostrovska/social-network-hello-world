import { Button, ButtonProps, IconButton } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

interface AppButtonProps extends ButtonProps {
  label: string;
  icon?: ReactNode;
  isIconButton?: boolean;
  children?: ReactNode;
}

/**
 * A reusable button component that conditionally renders either a standard Button or an IconButton based on the isIconButton prop.
 * It supports forwarding a ref and accepts additional props to customize its behavior and appearance.
 *
 * @param {string} label - The accessible label for the button. Required for IconButton cases to provide meaningful context.
 * @param {React.ReactNode} [icon=null] - An optional React node representing the icon to be displayed in the button (or IconButton).
 * @param {React.ReactNode} [children=null] - Optional child elements or text content for the button. Ignored for IconButton cases.
 * @param {boolean} [isIconButton=false] - Determines whether the IconButton or a standard Button is rendered.
 * @param {AppButtonProps} props - Additional properties supported by the underlying Button or IconButton components.
 * @param {React.Ref<HTMLButtonElement>} ref - A ref object forwarded to the underlying button element.
 * @returns {JSX.Element} The rendered Button or IconButton component based on the specified props.
 */

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (
    { label, icon = null, children = null, isIconButton = false, ...props },
    ref
  ) => {
    if (isIconButton) {
      return (
        <IconButton ref={ref} aria-label={label} {...props}>
          {icon}
        </IconButton>
      );
    }

    return (
      <Button ref={ref} {...props} startIcon={icon}>
        {children || label}
      </Button>
    );
  }
);

/**
 * A static property that defines the display name of the AppButton component.
 * This is used for debugging or development purposes to provide a custom label
 * for the component in React Developer Tools.
 *
 * @type {string}
 */
AppButton.displayName = 'AppButton';
export default AppButton;
