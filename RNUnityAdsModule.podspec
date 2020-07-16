
Pod::Spec.new do |s|
  s.name         = "RNUnityAdsModule"
  s.version      = "2.0.2"
  s.summary      = "RNUnityAdsModule"
  s.description  = <<-DESC
                  RNUnityAdsModule
                   DESC
  s.homepage     = "http://doorxp.com"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "doorxp@msn.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "git@github.com:kotdavinchi/unity-ads-react-native-module.git", :tag => "master" }
  s.source_files  = "ios/*.{h,m}"
  s.requires_arc = true
  #s.vendored_libraries = "ios/Frameworks/UnityAds.framework"
  s.vendored_frameworks = "ios/Frameworks/UnityAds.framework"
  s.dependency "React"
  s.frameworks = 'UnityAds'

end

