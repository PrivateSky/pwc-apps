/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  MenuItem,
} from 'webcomponents/dist/types/interfaces/MenuItem';

export namespace Components {
  interface AppHome {}
  interface AppMenuUsage {}
  interface AppProfile {
    'getMyName': Function;
    'lastName': string;
    'match': MatchResults;
  }
  interface AppRoot {
    'controller': any;
    'history': RouterHistory;
  }
  interface AppRouterUsage {}
  interface AttachmentListUsage {}
  interface ExpandableRenderer {
    'active': boolean;
    'somethingChanged': boolean;
    'url': any;
  }
  interface FeedbackAlertUsage {}
  interface FilesChooserUsage {}
  interface ModalUsage {}
  interface PageNotFoundUsage {}
  interface PinPopupUsage {}
  interface PskThemes {}
  interface SidebarRenderer {
    'active': boolean;
    'value': MenuItem;
  }
  interface UiLoaderUsage {}
  interface UserProfileUsage {}
  interface WizardUsage {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppMenuUsageElement extends Components.AppMenuUsage, HTMLStencilElement {}
  var HTMLAppMenuUsageElement: {
    prototype: HTMLAppMenuUsageElement;
    new (): HTMLAppMenuUsageElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppRouterUsageElement extends Components.AppRouterUsage, HTMLStencilElement {}
  var HTMLAppRouterUsageElement: {
    prototype: HTMLAppRouterUsageElement;
    new (): HTMLAppRouterUsageElement;
  };

  interface HTMLAttachmentListUsageElement extends Components.AttachmentListUsage, HTMLStencilElement {}
  var HTMLAttachmentListUsageElement: {
    prototype: HTMLAttachmentListUsageElement;
    new (): HTMLAttachmentListUsageElement;
  };

  interface HTMLExpandableRendererElement extends Components.ExpandableRenderer, HTMLStencilElement {}
  var HTMLExpandableRendererElement: {
    prototype: HTMLExpandableRendererElement;
    new (): HTMLExpandableRendererElement;
  };

  interface HTMLFeedbackAlertUsageElement extends Components.FeedbackAlertUsage, HTMLStencilElement {}
  var HTMLFeedbackAlertUsageElement: {
    prototype: HTMLFeedbackAlertUsageElement;
    new (): HTMLFeedbackAlertUsageElement;
  };

  interface HTMLFilesChooserUsageElement extends Components.FilesChooserUsage, HTMLStencilElement {}
  var HTMLFilesChooserUsageElement: {
    prototype: HTMLFilesChooserUsageElement;
    new (): HTMLFilesChooserUsageElement;
  };

  interface HTMLModalUsageElement extends Components.ModalUsage, HTMLStencilElement {}
  var HTMLModalUsageElement: {
    prototype: HTMLModalUsageElement;
    new (): HTMLModalUsageElement;
  };

  interface HTMLPageNotFoundUsageElement extends Components.PageNotFoundUsage, HTMLStencilElement {}
  var HTMLPageNotFoundUsageElement: {
    prototype: HTMLPageNotFoundUsageElement;
    new (): HTMLPageNotFoundUsageElement;
  };

  interface HTMLPinPopupUsageElement extends Components.PinPopupUsage, HTMLStencilElement {}
  var HTMLPinPopupUsageElement: {
    prototype: HTMLPinPopupUsageElement;
    new (): HTMLPinPopupUsageElement;
  };

  interface HTMLPskThemesElement extends Components.PskThemes, HTMLStencilElement {}
  var HTMLPskThemesElement: {
    prototype: HTMLPskThemesElement;
    new (): HTMLPskThemesElement;
  };

  interface HTMLSidebarRendererElement extends Components.SidebarRenderer, HTMLStencilElement {}
  var HTMLSidebarRendererElement: {
    prototype: HTMLSidebarRendererElement;
    new (): HTMLSidebarRendererElement;
  };

  interface HTMLUiLoaderUsageElement extends Components.UiLoaderUsage, HTMLStencilElement {}
  var HTMLUiLoaderUsageElement: {
    prototype: HTMLUiLoaderUsageElement;
    new (): HTMLUiLoaderUsageElement;
  };

  interface HTMLUserProfileUsageElement extends Components.UserProfileUsage, HTMLStencilElement {}
  var HTMLUserProfileUsageElement: {
    prototype: HTMLUserProfileUsageElement;
    new (): HTMLUserProfileUsageElement;
  };

  interface HTMLWizardUsageElement extends Components.WizardUsage, HTMLStencilElement {}
  var HTMLWizardUsageElement: {
    prototype: HTMLWizardUsageElement;
    new (): HTMLWizardUsageElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-menu-usage': HTMLAppMenuUsageElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'app-router-usage': HTMLAppRouterUsageElement;
    'attachment-list-usage': HTMLAttachmentListUsageElement;
    'expandable-renderer': HTMLExpandableRendererElement;
    'feedback-alert-usage': HTMLFeedbackAlertUsageElement;
    'files-chooser-usage': HTMLFilesChooserUsageElement;
    'modal-usage': HTMLModalUsageElement;
    'page-not-found-usage': HTMLPageNotFoundUsageElement;
    'pin-popup-usage': HTMLPinPopupUsageElement;
    'psk-themes': HTMLPskThemesElement;
    'sidebar-renderer': HTMLSidebarRendererElement;
    'ui-loader-usage': HTMLUiLoaderUsageElement;
    'user-profile-usage': HTMLUserProfileUsageElement;
    'wizard-usage': HTMLWizardUsageElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppMenuUsage extends JSXBase.HTMLAttributes<HTMLAppMenuUsageElement> {}
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'getMyName'?: Function;
    'lastName'?: string;
    'match'?: MatchResults;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {
    'controller'?: any;
    'history'?: RouterHistory;
    'onRouteChanged'?: (event: CustomEvent<any>) => void;
  }
  interface AppRouterUsage extends JSXBase.HTMLAttributes<HTMLAppRouterUsageElement> {}
  interface AttachmentListUsage extends JSXBase.HTMLAttributes<HTMLAttachmentListUsageElement> {}
  interface ExpandableRenderer extends JSXBase.HTMLAttributes<HTMLExpandableRendererElement> {
    'active'?: boolean;
    'somethingChanged'?: boolean;
    'url'?: any;
  }
  interface FeedbackAlertUsage extends JSXBase.HTMLAttributes<HTMLFeedbackAlertUsageElement> {}
  interface FilesChooserUsage extends JSXBase.HTMLAttributes<HTMLFilesChooserUsageElement> {}
  interface ModalUsage extends JSXBase.HTMLAttributes<HTMLModalUsageElement> {}
  interface PageNotFoundUsage extends JSXBase.HTMLAttributes<HTMLPageNotFoundUsageElement> {}
  interface PinPopupUsage extends JSXBase.HTMLAttributes<HTMLPinPopupUsageElement> {}
  interface PskThemes extends JSXBase.HTMLAttributes<HTMLPskThemesElement> {}
  interface SidebarRenderer extends JSXBase.HTMLAttributes<HTMLSidebarRendererElement> {
    'active'?: boolean;
    'value'?: MenuItem;
  }
  interface UiLoaderUsage extends JSXBase.HTMLAttributes<HTMLUiLoaderUsageElement> {}
  interface UserProfileUsage extends JSXBase.HTMLAttributes<HTMLUserProfileUsageElement> {}
  interface WizardUsage extends JSXBase.HTMLAttributes<HTMLWizardUsageElement> {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-menu-usage': AppMenuUsage;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'app-router-usage': AppRouterUsage;
    'attachment-list-usage': AttachmentListUsage;
    'expandable-renderer': ExpandableRenderer;
    'feedback-alert-usage': FeedbackAlertUsage;
    'files-chooser-usage': FilesChooserUsage;
    'modal-usage': ModalUsage;
    'page-not-found-usage': PageNotFoundUsage;
    'pin-popup-usage': PinPopupUsage;
    'psk-themes': PskThemes;
    'sidebar-renderer': SidebarRenderer;
    'ui-loader-usage': UiLoaderUsage;
    'user-profile-usage': UserProfileUsage;
    'wizard-usage': WizardUsage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


