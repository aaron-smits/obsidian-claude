Lately I've been trying out [Zed](https://zed.dev/). From the Zed team:

`Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter. It's also open source.`

Compared to something like [Neovim](https://neovim.io/), I think Zed has a lot of advantages for someone coming from VS Code:

* Integrated terminal and Keybindings like VS Code out of the box
* Comfortable and familiar layout, including a sidebar with a file tree and an Assistant Panel with LLM integrations.
* Vim mode is included, but if you're a mere mortal like myself and still use a mouse, you don't have to edit that way. 
* Wicked fast: Zed is written is in Rust, which means we get extremely quick performance. Coming from VS Code, I am super impressed by how fast Zed operates. 

						While officially supported only on Mac as of this post, Zed provides [documentation](https://zed.dev/docs/developing-zed) for developers who want to build the program from source to use on Windows or Linux. 

## Linux Setup

On my laptop I run Arch Linux, so I followed the steps provided by the Zed team to build it from source on my system. The Zed  [documentation](https://zed.dev/docs/developing-zed) provides a full description of this flow, which I will summarize below:

1. [Clone the repository from Github](https://github.com/zed-industries/zed)
```shell
git clone https://github.com/zed-industries/zed.git
```
2. [Install Rust](https://www.rust-lang.org/tools/install) and make sure it is up to date: 
``` shell
# Install script (you can also use your package manager)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Update
rustup
```
3. From the root of the Zed repository, install the system libraries required to build:
```shell
script/linux
```
4. Using the script provided, you can build and install the editor for Linux systems:
``` shell
./script/install-linux
```

This will build zed and the CLI in release mode and make them available at `~/.local/bin/zed`, installing .desktop files to `~/.local/share`.

After this completes, you should see the following output:
``` shell
+ script/install.sh
Zed has been installed. Run with 'zed'
```

> [!NOTE]
> The Rust compiler is notoriously resource-hungry and a little slow. My system took about quite a while to finish compiling the program, and hung for a good amount of time when compiling the final binary. Be patient!

## Working with Zed

The build installs a CLI, which allows you to launch the editor. On my KDE desktop, I also see a new Application I can launch with KRunner called "Zed Devel".

The version I am running as of this post is Zed dev 0.144.0, which I am really excited to work with as it includes support for Claude 3.5 Sonnet in the Assistant Panel, which allows you to plug in your API key to your favorite AI models and prompt them. Claude Sonnet is extremely powerful for getting help with coding problems, so it will be fun to see how this improves my workflow. 