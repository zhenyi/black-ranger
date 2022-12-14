//
//  ContentView.swift
//  BlackRanger
//
//  Created by Zhenyi Tan on 13/12/22.
//

import SwiftUI


struct ContentView: View {

    @State private var label = "This app will handle blackranger: deeplinks"

    var body: some View {
        VStack {
            Text(label)
        }
        .padding()
        .onOpenURL(perform: onOpenURL)
    }

    private func onOpenURL(_ url: URL) {
        label = "URL is \(url.absoluteString)"
    }

}
