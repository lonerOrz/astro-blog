// terminal.ts

export interface Command {
  cmd: string;
  output: string;
}

function typeText(
  targetElement: HTMLElement,
  text: string,
  delay: number,
  callback: () => void,
) {
  let i = 0;
  targetElement.textContent = ""; // Clear content before typing
  function next() {
    if (i < text.length) {
      targetElement.textContent += text[i];
      i++;
      setTimeout(next, delay);
    } else if (callback) {
      callback();
    }
  }
  next();
}

export function runTerminal(
  container: HTMLElement,
  commands: Command[] | null = null,
) {
  const cmds: Command[] = commands || [
    { cmd: "echo Hello world", output: "Hello world\n" },
    { cmd: "ls", output: "file1.txt  file2.txt  script.sh\n" },
  ];

  const logContainer = document.createElement("div");
  const cursor = document.createElement("span");
  cursor.className = "cursor";

  container.appendChild(logContainer);
  container.appendChild(cursor);

  function runCommand(index: number) {
    if (index >= cmds.length) {
      // Loop animation
      setTimeout(() => {
        logContainer.innerHTML = "";
        runCommand(0);
      }, 3000);
      return;
    }

    const cmdLine = "$ " + cmds[index].cmd;
    const outputText = cmds[index].output;

    const cmdElement = document.createElement("span");
    cmdElement.className = "terminal-command";
    logContainer.appendChild(cmdElement);

    typeText(cmdElement, cmdLine, 50, () => {
      const outputElement = document.createElement("span");
      outputElement.className = "terminal-output";
      logContainer.appendChild(outputElement);
      typeText(outputElement, outputText, 30, () => {
        runCommand(index + 1);
      });
    });
  }

  runCommand(0);

  // Keep container scrolled to the bottom
  setInterval(() => {
    container.scrollTop = container.scrollHeight;
  }, 100);
}
