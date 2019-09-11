
Pod::Spec.new do |s|
  s.name         = "RNUnityAdsModule"
  s.version      = "2.0.0"
  s.summary      = "RNUnityAdsModule"
  s.description  = <<-DESC
                  RNUnityAdsModule
                   DESC
  s.homepage     = "http://doorxp.com"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "doorxp@msn.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "git@github.com:doorxp/unity-ads-react-native-module.git", :tag => "master" }
  s.source_files  = "*.{h,m}"
  s.requires_arc = true
  s.vendored_libraries = "Frameworks/UnityAds.framework"
  s.dependency "React"

end

  