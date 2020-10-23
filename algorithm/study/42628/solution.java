public class DoublePriorityQueue {
    public int[] solution(String[] operations) {
        PriorityQueue<Integer> minQueue = new PriorityQueue<Integer>((a,b) -> a-b);
        PriorityQueue<Integer> maxQueue = new PriorityQueue<Integer>((a,b) -> b-a);
        
        for(String op : operations) {
        	String[] operation = op.split(" ");
        	
        	
        	if(operation[0].equals("I")) {
        		minQueue.add(Integer.valueOf(operation[1]));
        		maxQueue.add(Integer.valueOf(operation[1]));
        	}
        	else {
        		if(operation[1].equals("1")) {
        			try {
        				minQueue.remove(maxQueue.poll());
        			}
        			catch(Exception e) {};
        		}
        		else {
        			try {
        				maxQueue.remove(minQueue.poll());
        			}
        			catch(Exception e) {};
        		}
        	}
        }
        
        return new int[] {maxQueue.size() == 0 ? 0 : maxQueue.poll(), minQueue.size() == 0 ? 0 : minQueue.poll()};
    }
}
