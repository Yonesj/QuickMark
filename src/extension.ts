import * as vscode from "vscode";
import { BookmarkTreeProvider } from "./provider/BookmarkTreeProvider";

// This function is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
	// Create an instance of BookmarkTreeProvider to manage the bookmarks
	const bookmarkTree: BookmarkTreeProvider = new BookmarkTreeProvider(context);

	// Register commands and tree data provider to the VSCode extension context
	context.subscriptions.push(
		// Register the BookmarkTreeProvider to display the bookmarks in the tree view
		vscode.window.registerTreeDataProvider("qmark", bookmarkTree),

		// Register the command to add an item (file) to the bookmarks
		vscode.commands.registerCommand("qmark.addItem", (args) => {
			// If an argument (a file) is passed, use its path to add the file
			if (args) {
				bookmarkTree.addFile(vscode.Uri.parse(args.path));
			} else {
				// Otherwise, get the currently active editor's file and bookmark it
				const uri: vscode.Uri | undefined = vscode.window.activeTextEditor?.document.uri;
				if (!uri) {
					return; // If no active editor or file, do nothing
				}
				bookmarkTree.addFile(uri);
			}
		}),

		// Register the command to remove a specific item from the bookmarks
		vscode.commands.registerCommand("qmark.removeItem", (args) => {
			// Delete the file based on its resourceUri path
			bookmarkTree.deleteFile(args.resourceUri.path);
		}),

		// Register the command to remove all bookmarked files
		vscode.commands.registerCommand("qmark.removeAllItems", () => {
			bookmarkTree.deleteAll();
		}),

		// Register the command to refresh the tree view (trigger UI update)
		vscode.commands.registerCommand("qmark.refreshEntry", () => {
			bookmarkTree.refresh();
		}),

		// Register the command to open a file when clicked in the tree view
		vscode.commands.registerCommand("qmark.openFile", (file) => {
			vscode.commands.executeCommand(
				"vscode.open", // Use the VSCode `open` command
				vscode.Uri.parse(file.resourceUri.path) // Parse the file URI and open it
			);
		})
	);
}
