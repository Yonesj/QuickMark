import * as vscode from "vscode";

export class FileSystemObject extends vscode.TreeItem {
    // The URI of the file represented by this TreeItem
    resourceUri: vscode.Uri;
    // Command that will be executed when this item is clicked in the tree view
    command: vscode.Command;

    // Constructs a new FileSystemObject, which represents a file in the tree view.
    constructor(public readonly label: string, uri: vscode.Uri) {
        // Initialize the TreeItem with the given label and no children (collapsible state: None)
        super(label, vscode.TreeItemCollapsibleState.None);

        // Set the tooltip to display the full file path
        this.tooltip = uri.fsPath;

        // Store the file's URI for reference in the command and elsewhere
        this.resourceUri = uri;

        // Define the command to open the file when this item is selected in the tree view
        this.command = {
            command: "qmark.openFile",  // The command ID to trigger the file opening
            arguments: [this],          // Pass the current item as an argument to the command
            title: this.label,          // Title for the command (typically the label of the file)
        };
    }
}
