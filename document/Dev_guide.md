# Dev Flow

```mermaid
graph LR
master(master branch)-->front(Front branch)
master --> back(Back branch)
front --> front-sub(Front Subbranch 1)
front --> front-subect(...)
front -.-> front-merge(Front merge)
front-sub -->|merge to front| front-merge
front-subect --> |merge to front| front-merge
back --> back-sub(Back Subbranch 1)
back --> back-subect(...)
back -.-> back-merge(Back merge)
back-sub -->|merge to back| back-merge
back-subect --> |merge to back| back-merge
back-merge --> master-merge
master -.-> master-merge(master merge)
front-merge --> master-merge
```

![image-20191104185446699](E:\Workspace\gourmethunter\document\image-20191104185446699.png)

# Dev Steps

1. Create new branch (base on diagram)
2. Push branch to origin remote
3. Code a little bit
4. Create pull request (commect issue ex: #3, #123,...)
5. Continue code until done
6. Push new code to branch
7. Merge pull request