SESSION=dev-api-weather
tmux new-session -d -s $SESSION
tmux new-window -t $SESSION:1 -n 'vim'

tmux select-window -t $SESSION:1
tmux split-window -h
tmux split-window -v
tmux select-pane -t 1
tmux send-keys 'yarn start' C-m
tmux select-pane -t 0
tmux send-keys 'vim' C-m
tmux select-pane -t 2
tmux send-keys 'clear' C-m
tmux select-pane -t 0
tmux resize-pane -R 20 

tmux attach -t $SESSION;
