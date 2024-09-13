import * as vscode from "vscode";
import { FileSystemObject } from "./FileSystemObject";

export class BookmarkTreeProvider implements vscode.TreeDataProvider<FileSystemObject> {

    // Array to hold the bookmarked files (as URIs)
    private _bookmarkedFiles: vscode.Uri[] = [];
    // Extension context for accessing workspaceState (persistent storage)
    private _context: vscode.ExtensionContext;
    // Event emitter for notifying when the tree data changes (triggering UI refresh)
    private _onDidChangeTreeData: vscode.EventEmitter<FileSystemObject | undefined | null | void> =
        new vscode.EventEmitter<FileSystemObject | undefined | null | void>();
    // Event that fires when tree data changes, used to update the UI
    readonly onDidChangeTreeData: vscode.Event<FileSystemObject | undefined | null | void> =
        this._onDidChangeTreeData.event;

    // Constructor initializes the provider with the extension context
    constructor(context: vscode.ExtensionContext) {
        this._context = context;

        // Load bookmarked files from persistent storage (workspaceState)
        this._bookmarkedFiles =
            this._context.workspaceState.get<vscode.Uri[]>("bookmarkedFiles") || [];
    }

    // Method to refresh the tree view by emitting the change event
    refresh(): void {
        // Fire the event with undefined to refresh the entire tree
        this._onDidChangeTreeData.fire(undefined);
    }

    // Returns the UI representation of a single tree item (file)
    getTreeItem(element: FileSystemObject): FileSystemObject | Thenable<FileSystemObject> {
        return element;
    }

    // Returns the children (files) for the given tree element or root
    getChildren(element?: FileSystemObject): vscode.ProviderResult<FileSystemObject[]> {
        // If there is an element (a file), it has no children, return an empty array
        if (element) {
            return [];
        }

        // Map the list of bookmarked file URIs to FileSystemObject instances
        return this._bookmarkedFiles.map((uri: vscode.Uri) => {
            const fileName: string = uri.path.replace(/^.*[\\/]/, ""); // Extract file name from path
            return new FileSystemObject(fileName, uri); // Return a new FileSystemObject
        });
    }

    // Adds a new file to the list of bookmarked files and refreshes the view
    addFile(uri: vscode.Uri): void {
        // Add the new file URI to the bookmarked list
        this._bookmarkedFiles.push(uri);

        // Save the updated list to persistent storage
        this.saveItems();

        // Refresh the tree view
        this.refresh();
    }

    // Removes a file from the list of bookmarked files by its path
    deleteFile(path: string): void {
        // Find the index of the file by matching its path
        const index: number = this._bookmarkedFiles.findIndex(
            (uri: vscode.Uri) => uri.path === path
        );

        // If the file is not found, exit the function
        if (index === -1) {
            return;
        }

        // Remove the file from the bookmarked list
        this._bookmarkedFiles.splice(index, 1);

        // Save the updated list to persistent storage
        this.saveItems();

        // Refresh the tree view
        this.refresh();
    }

    // Deletes all bookmarked files and refreshes the view
    deleteAll(): void {
        // Clear the list of bookmarked files
        this._bookmarkedFiles = [];

        // Save the empty list to persistent storage
        this.saveItems();

        // Refresh the tree view
        this.refresh();
    }

    // Helper method to save the list of bookmarked files to workspaceState (persistent storage)
    private saveItems(): void {
        this._context.workspaceState.update("bookmarkedFiles", this._bookmarkedFiles);
    }
}
