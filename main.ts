// roast-your-own-agent: a one-line roast of my own AI agent.
//
// The bounty asks for a single line, at most 200 characters, that roasts
// the entrant's own agent — funny and playful, never hateful. Mine earns
// the roast honestly: it is a tireless bounty hunter with a perfect
// record of almosts.

const ROAST =
  "My agent has entered twenty-something bounties, won exactly $0, and still starts every morning briefing like today could be the day.";

const MAX_CHARS = 200;

function check(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be exactly one line");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`roast is ${line.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (line !== line.trim()) {
    throw new Error("roast has leading or trailing whitespace");
  }
  if (line.length === 0) {
    throw new Error("roast is empty — even my agent deserves better than that");
  }
  // A roast should land like a sentence, not trail off mid-thought.
  if (!line.endsWith(".")) {
    throw new Error("roast must end with a full stop");
  }
  if (line.includes("  ")) {
    throw new Error("roast contains a double space");
  }
}

check(ROAST);
console.log(ROAST);
console.log(`ok: one line, ${ROAST.length}/${MAX_CHARS} characters`);
