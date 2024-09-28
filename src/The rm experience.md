---
title: The rm experience
published_on: 2024-05-26
updated_on: 2024-09-28
---
I am working on a project while I execute commands in the Terminal. I feel free, easy, and focused on the task at hand, and I execute the commands one after another without discrimination. I dedicate very little thought to them while I quickly type each command letter; my thoughts go faster than I can type and execute them. Eager that at the end of this stream of commands, I can continue with the rest of my tasks, when I suddenly realize my mistake, I feel a cold run through my body; I know the consequences of what I just did almost inadvertently. I deleted something I shouldn't; I rush to check the recycle bin and search with little hope for what I just deleted. When I realize even more of my unfortunate mistake, I take a deep breath and feel anguish, fear, and anger. I deleted files that only existed on my local and haven't been checked into version control, work that I will have to redo from scratch, which will take me a long time and delay my task; furthermore, what will I say during Standup? I accidentally deleted the progress I've been discussing for days.

I used `rm` to delete a directory that contained files I was working on. My progress only existed on my local, and since it was still a work-in-progress, I hadn't pushed it to any version control system. Furthermore, I had just learned that the `rm` command does not move what it deletes to the trash; it disappears completely, with no way to recover it. My progress was a wasted effort and lost work.

That same day, I dedicated myself to ensuring it would never happen again. I knew that it was very likely that I could make that mistake again in the future; it could be months or years, but I would not take the risk of it happening again. And I was right; about one year later, while I think I'm in a directory different than the one I'm actually in, I execute an `rm` command on a directory that was not the one I thought since it had the same name. Again, I realized just after executing Enter that I had deleted something I wasn't supposed to delete, which only existed on my machine. As I rush to the trash and see the directory I just deleted appear in front of my eyes, I feel relieved; I'm eager to move it back to its original place and verify that everything is still there. Indeed, everything is as if I had never executed that `rm` command. 

That day, one year ago, I created an alias for the `rm` command to the `trash` command, which moves files to the trash on macOS.

```bash
brew install trash
```

```bash
alias rm=trash
```
