# QuickMark - VSCode Extension

QuickMark is a Visual Studio Code extension that allows users to bookmark files within large projects, making it easy to quickly locate frequently accessed files without searching through thousands of files in the project structure.

<br>

## Features

- **Bookmark Files**: Bookmark files from your project and quickly access them via the Bookmark Explorer.
- **Tree View**: Displays your bookmarks in a dedicated tree view, giving you quick access.
- **Quick Commands**: Manage bookmarks with easy-to-use commands.
- **Persistent storage**: Your bookmarks are saved and persist across sessions, so you won't lose them when you close and reopen VSCode.

<br>

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking the Extensions icon in the Activity Bar.
3. Search for **QuickMark**.
4. Click **Install** to add the extension to your VSCode environment.
5. Once installed, you will see **Bookmark Explorer** in the Activity Bar.

<br>

## How to Use

### Available Commands

Here’s a list of commands to help you manage your bookmarks efficiently:


| Title                       | Command                     | Description                               |
|-----------------------------|-----------------------------|-------------------------------------------|
| **Refresh**                  | `qmark.refreshEntry`         | Refresh the Bookmark Explorer.            |
| **Add to Bookmark Tree**     | `qmark.addItem`              | Add the active file to bookmarks.         |
| **Remove from Explorer**     | `qmark.removeItem`           | Remove a file from bookmarks.             |
| **Remove All Bookmarks**     | `qmark.removeAllItems`       | Remove all bookmarks.                     |

### Context Menu Support

- **Explorer Context Menu**: Right-click a file in the Explorer view to bookmark it directly.
- **Bookmark Explorer Context Menu**: Right-click or left-click a bookmark to remove it or open it.

<br>

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.