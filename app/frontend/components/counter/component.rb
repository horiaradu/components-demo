class Counter::Component < ApplicationViewComponent
  option :title

  def display_title
    "Counter #{title}"
  end
end
