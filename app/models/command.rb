class Command < ActiveRecord::Base

  def toASCII
    self.toString.b
  end

  def toString
    self.time.to_s + ":" + self.command + "\n"
  end

  def toHash
    {time:self.time, command: self.command}
  end

end
