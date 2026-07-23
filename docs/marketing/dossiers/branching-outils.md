# Dossier — Branching & outils (Storyflow + StraySpark + Solana)

## Storyflow Editor blog

| Article | URL |
| --- | --- |
| Branching dialogue that doesn’t suck | https://storyflow-editor.com/blog/how-to-write-branching-dialogue/ |
| Branching nightmare (patterns) | https://storyflow-editor.com/blog/branching-dialogue-nightmare-how-to-fix/ |
| Best ND tools 2026 | https://storyflow-editor.com/blog/best-narrative-design-tools-for-game-developers-2025/ |

### 5 principes craft
1. **Choice copy = microcraft** — bouton = acte (`Lie.`, `[Argue from theology]`), pas preview de la réplique  
2. **Choix = qui je suis**, pas quoi se passe ensuite  
3. **Convergence** — toute divergence a un reconvergence connu (Ashwell Branch-and-Bottleneck / foldback)  
4. **Plant now, water later** — payoff plusieurs scènes plus tard  
5. **Voice consistency** sur toutes les branches  

Métaphore : on ne compose pas un sentier, on conçoit la forêt.

### Patterns d’architecture (Ashwell + pratique)
- Linear with Branches (Gauntlet)  
- Branch and Bottleneck  
- Hub and Spoke  
- Parallel Tracks  
- Node Graph  

Séparer data dialogue / logique jeu ; state machine + flags.

### Outils cités
StoryFlow (visuel), articy:draft X, Ink (+ Inky), Yarn Spinner, Twine, Arcweave. Visuel si branches complexes / non-devs ; texte si Git diffs propres.

## StraySpark

| Article | URL |
| --- | --- |
| Dialogue trees that don’t suck | https://www.strayspark.studio/blog/designing-dialogue-trees-branching-narrative |
| Godot dialogue/quest | https://www.strayspark.studio/blog/godot-4-dialogue-quest-systems-signals-resources |

### Ratio recommandé
Hub-and-spoke **90%** / Diamond **9%** / Waterfall **1%**.

NPC memory : met before, key choices, knowledge, quest outcomes — pas chaque micro-ligne.  
Écrire court : 1–3 phrases NPC ; 5–10 mots options joueur.  
Event bus pour découpler dialogue ↔ quêtes.

## Solana Garden guide

URL : https://solana.garden/guides/game-narrative-design-explained/

- ND owns structure + delivery systems  
- Mix cutscenes / env / dialogue / emergent  
- Branching = budget prod ; flags > scènes uniques  
- Ludonarrative harmony vs dissonance (aligner loop & premise)  
- Lore bible équipe ≠ codex joueur  
- Checklist prod : thème↔loop, beats↔milestones, skip rates, accessibilité  

## Hooks Fabl

- « Le bouton dit l’acte. La réplique est la conséquence. »
- « 90 / 9 / 1 — hub, diamant, cascade. »
- « Branching = budget, pas vanity feature. »
- « Plant now. Water later. »
