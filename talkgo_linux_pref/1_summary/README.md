
## CPU性能篇总结

### CPU为什么会出现性能问题

- 高负载
- 高io
- 进程抢占
- 进程的不合理配置
    + 子进程没有回收导致僵尸进程太多
    + D进程

#### CPU性能的指标

- 平均负载：R进程 + D进程
- 上下文切换
- CPU使用率

### 导致CPU性能问题的原因有哪些

#### 上下文切换

- CPU上下文：
    + CPU寄存器（包含段寄存器、数据寄存器等）：都是从内存读的，读为下一个任务的
    + 程序计数器（PC）：切换为目标任务的下一条指令
- 上下文切换即就是CPU上下文的切换
    + 把前一个任务的CPU上下文保存切换到另一个
    + 被切换的CPU上下文会存储在内核中，并在任务重新调度的时候被加载进来
- 上下文切换不仅仅是CPU上下文的切换，还包括了任务的上下文切换
    + 用户态：虚拟内存、栈、全局变量
    + 内核态：堆栈，寄存器
    + 虚拟内存更新之后，TLB（虚拟内存到物理内存之间的映射）也需要刷新，多核处理器的共享的L3 cache也会更新，会导致任务变慢
- 使用工具：
    + vmstat： 能查看系统CPU切换
    + pidstat：查看单个进程的CPU切换（包含资源和非资源）

#### 中断处理

软中断执行的时间太长

#### D进程和僵尸进程过多

D进程占用CPU不下来，僵尸进程会耗费资源和pid。


### 如何找到性能问题

老师的总结不能在总结了，[定位CPU问题](https://github.com/helios741/myblog/tree/new/learn_go/talkgo_linux_pref/1_11_quick_cpu_perf)

### 如何优化性能CPU性能

要从业务和系统两方面优化，具体参考：[CPU优化方法](https://github.com/helios741/myblog/tree/new/learn_go/talkgo_linux_pref/1_12_cpu_analy_method)