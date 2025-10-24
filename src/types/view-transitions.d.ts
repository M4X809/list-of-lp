// Type definitions for View Transitions API
// https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API

import "react";

declare module "react" {
	interface CSSProperties {
		viewTransitionName?: string;
	}
}

// Extend global Document interface for view transitions
declare global {
	interface Document {
		startViewTransition?: (callback: () => void | Promise<void>) => ViewTransition;
	}

	interface ViewTransition {
		finished: Promise<void>;
		ready: Promise<void>;
		updateCallbackDone: Promise<void>;
		skipTransition: () => void;
	}
}

export {};
