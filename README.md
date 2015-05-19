# Pulse

This library is designed to provide low-level analytics and data intelligence about events that happen on your site or app. By tracking discrete user actions and using multivariate analysis, Pulse can identify what events cause other events to happen.

## Installation

- Include `lib/track.js` at the bottom of every page.
- Insert your site key in script where it says to

## Usage

Pulse uses HTML5 data attributes to configure event tracking. Simply include the following on any item where you want to track an action:

- `data-pulse-action` (String) : The name of the event you want to log ("click", "like", "postPhoto", etc.)
- `data-pulse-UID` (String) : A unique identifier from your database
- `data-pulse-UIDType` (String) : The type of UID you've provided. Example: a user ID.

Pulse will also automatically track a user across multiple sessions, allowing you to identify users that transition from authed to non-authed, or who use mutliple accounts to log in from a single machine.

