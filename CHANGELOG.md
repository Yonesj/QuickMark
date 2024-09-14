# Change Log

All notable changes to the "QuickMark" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

- Placeholder for future updates.

## [1.0.0] - 2024-09-14

### Added
- **Bookmark Explorer**: Added a dedicated view in the activity bar to manage and view bookmarked files.
- **Add Bookmark**: Users can bookmark the active file via the context menu or through the `qmark.addItem` command.
- **Remove Bookmark**: Users can remove individual bookmarks with the `qmark.removeItem` command.
- **Remove All Bookmarks**: The option to clear all bookmarks using the `qmark.removeAllItems` command.
- **Open Bookmark**: Commands to open the first, second, and third bookmarks via `qmark.open1`, `qmark.open2`, and `qmark.open3`.
- **Refresh Bookmark Tree**: Users can refresh the bookmark tree with the `qmark.refreshEntry` command.
- **Context Menu Integration**: Ability to add the active file to bookmarks from the explorer's context menu.
- **Persistent Storage**: Bookmarked files are stored using VSCode's workspace state, ensuring persistence across sessions.

